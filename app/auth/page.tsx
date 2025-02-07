"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { toast  } from 'react-hot-toast'

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  // const { toast } = useToast()

  // async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault()
  //   setIsLoading(true)

  //   const formData = new FormData(event.currentTarget)
  //   const email = formData.get('email') as string
  //   const password = formData.get('password') as string
  //   const isLogin = (event.currentTarget.getAttribute('data-form-type') === 'login')

  //   try {
  //     if (isLogin) {
  //       const { error } = await supabase.auth.signInWithPassword({
  //         email,
  //         password,
  //       })
  //       if (error) throw error
  //       router.push('/dashboard')
  //     } else {
  //       const { error } = await supabase.auth.signUp({
  //         email,
  //         password,
  //         options: {
  //           emailRedirectTo: `${window.location.origin}/auth/callback`,
  //         },
  //       })
  //       if (error) throw error
  //       toast.success({
  //         title: "Success!",
  //         description: "Please check your email to confirm your account.",
  //       })
  //     }
  //   } catch (error) {
  //     toast.error({
  //       title: "Error",
  //       description: error.message,
  //       variant: "destructive",
  //     })
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
  
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString();
    const isLogin = event.currentTarget.getAttribute("data-form-type") === "login";
  
    if (!email || !password) {
      toast.error("Email and password are required.");
      setIsLoading(false);
      return;
    }
  
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
    
      if (error) {
        console.error("Login error:", error);
        throw error;
      }
    
      toast.success("Logged in successfully!");
      router.push("/dashboard");
    } catch (error) {
      toast.error(error.message || "Something went wrong.");
    }
      finally {
      setIsLoading(false);
    }
  }
  

  return (
    <div className="container flex flex-col items-center justify-center w-screen h-screen">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Dumbbell className="w-6 h-6 mx-auto" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome to FitTrack
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to create your account or sign in
          </p>
        </div>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <form onSubmit={onSubmit} data-form-type="login">
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>
                    Enter your email and password to login to your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="m@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Login"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <form onSubmit={onSubmit} data-form-type="register">
                <CardHeader>
                  <CardTitle>Register</CardTitle>
                  <CardDescription>
                    Create a new account to start tracking your fitness journey
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="m@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Register"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}