
export function errorMessages(message) {
    if (message.includes("auth/invalid-credential")) {
        return "No account found. Please sign up first"
    }
    if (message.includes("auth/weak-password")) {
        return "Password should be at least 6 characters"
    }
    if (message.includes("Please verify your email before logging in.")) {
        return "A verification link has been sent to your email. Please check your inbox (and spam folder) to verify your email address. Thank you!"
    }
    if (message.includes("auth/email-already-in-use")) {
        return "This email is already registered. Try logging in."
    }
    if (message.includes("auth/invalid-email")) {
        return "Please enter a valid email address."
    }
    if (message.includes("auth/too-many-requests")) {
    return toast.error("Too many attempts. Try again later.");
  }
  if (message.includes("auth/user-disabled")) {
    return toast.error("This account has been disabled.");
  }

    return "Something went wrong. Please try again."
}



  
  
 
