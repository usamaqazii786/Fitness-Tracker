"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, Weight, Target, Calendar } from "lucide-react"
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function DashboardPage() {
  const router = useRouter()
  const [workouts, setWorkouts] = useState([])
  const [goals, setGoals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // checkUser()
    fetchDashboardData()
  }, [])

  // async function checkUser() {
  //   const { data: { session } } = await supabase.auth.getSession()
  //   if (!session) {
  //     router.push('/auth')
  //   }
  // }

  async function fetchDashboardData() {
    try {
      const { data: workoutsData } = await supabase
        .from('workouts')
        .select('*')
        .order('date', { ascending: false })
        .limit(10)

      const { data: goalsData } = await supabase
        .from('goals')
        .select('*')
        .order('created_at', { ascending: false })

      setWorkouts(workoutsData || [])
      setGoals(goalsData || [])
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const stats = [
    {
      title: "Total Workouts",
      value: workouts.length,
      icon: Activity,
    },
    {
      title: "Active Goals",
      value: goals.length,
      icon: Target,
    },
    {
      title: "This Week",
      value: workouts.filter(w => 
        new Date(w.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      ).length,
      icon: Calendar,
    },
  ]

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-4 mb-8 md:grid-cols-3">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Workout Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={workouts}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={(date) => new Date(date).toLocaleDateString()}
                  />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="duration"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}