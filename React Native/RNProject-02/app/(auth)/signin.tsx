import "@/global.css";
import { useAuth, useSignIn } from "@clerk/expo";
import { Link, useRouter } from "expo-router";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";

export default function SignIn() {
  const router = useRouter();
  const { signIn, setActive } = useSignIn();
  const { isSignedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signInLoading, setSignInLoading] = useState(false);
  const [errors, setErrors] = useState<any>(null);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const getEmailError = () => {
    if (!email) return null;
    if (!isValidEmail(email)) return "Please enter a valid email address";
    if (errors?.errors && errors.errors.find((e: any) => e.meta?.paramName === 'identifier')) {
       return errors.errors.find((e: any) => e.meta?.paramName === 'identifier').message;
    }
    return null;
  };

  const getPasswordError = () => {
    if (!password) return null;
    if (errors?.errors && errors.errors.find((e: any) => e.meta?.paramName === 'password')) {
       return errors.errors.find((e: any) => e.meta?.paramName === 'password').message;
    }
    return null;
  };

  const getGeneralError = () => {
    if (!errors) return null;
    if (errors.errors && errors.errors.length > 0) {
      const genErr = errors.errors.find((e: any) => !e.meta?.paramName);
      if (genErr) return genErr.message || genErr.longMessage;
      // If there are errors but they didn't match specific fields, show the first one here
      return errors.errors[0].message || errors.errors[0].longMessage;
    }
    return errors.message || "An error occurred during sign in.";
  };

  const canSubmit = email && password && isValidEmail(email) && !signInLoading;

  const handleSignIn = async () => {
    if (!canSubmit) return;

    Keyboard.dismiss();
    setSignInLoading(true);
    setErrors(null);

    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });

      console.log("Sign in status:", signInAttempt.status);

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(tabs)");
      } else if (signInAttempt.status === "needs_second_factor") {
        console.log("Needs second factor");
        setErrors({ message: "Two-factor authentication is required but not supported in this demo." });
      } else if (signInAttempt.status === "needs_client_trust") {
        console.log("Needs client trust");
        setErrors({ message: "Client trust verification is required." });
      } else {
        console.log("Unexpected sign in status:", signInAttempt.status);
        setErrors({ message: `Sign in incomplete. Status: ${signInAttempt.status}` });
      }
    } catch (err: any) {
      console.log("Sign in error:", JSON.stringify(err, null, 2));
      setErrors(err);
    } finally {
      setSignInLoading(false);
    }
  };

  if (isSignedIn) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 bg-background"
      >
        <View className="auth-safe-area">
          <View className="auth-content">
            {/* Brand Header */}
            <View className="auth-brand-block">
              <View className="auth-logo-wrap">
                <View className="auth-logo-mark">
                  <Text className="auth-logo-mark-text">S</Text>
                </View>
              </View>
              <Text className="auth-wordmark">SubTrack</Text>
              <Text className="auth-wordmark-sub">Subscription Manager</Text>
            </View>

            {/* Sign In Form */}
            <View className="auth-card">
              <Text className="auth-title">Welcome back</Text>
              <Text className="auth-subtitle">
                Sign in to continue managing your subscriptions
              </Text>

              <View className="auth-form">
                {/* Email Field */}
                <View className="auth-field">
                  <Text className="auth-label">Email</Text>
                  <TextInput
                    className={`auth-input ${
                      getEmailError() ? "auth-input-error" : ""
                    }`}
                    placeholder="Enter your email"
                    placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={!signInLoading}
                  />
                  {getEmailError() && (
                    <Text className="auth-error">{getEmailError()}</Text>
                  )}
                </View>

                {/* Password Field */}
                <View className="auth-field">
                  <Text className="auth-label">Password</Text>
                  <View className="relative">
                    <TextInput
                      className={`auth-input pr-12 ${
                        getPasswordError() ? "auth-input-error" : ""
                      }`}
                      placeholder="Enter your password"
                      placeholderTextColor="rgba(0, 0, 0, 0.4)"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!showPassword}
                      editable={!signInLoading}
                    />
                    <Pressable
                      className="absolute right-4 top-0 bottom-0 justify-center"
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <Text className="text-sm font-sans-semibold text-accent">
                        {showPassword ? "Hide" : "Show"}
                      </Text>
                    </Pressable>
                  </View>
                  {getPasswordError() && (
                    <Text className="auth-error">{getPasswordError()}</Text>
                  )}
                </View>

                {/* General Error */}
                {getGeneralError() && (
                  <Text className="auth-error text-center">
                    {getGeneralError()}
                  </Text>
                )}

                {/* Sign In Button */}
                <Pressable
                  className={`auth-button ${!canSubmit ? "auth-button-disabled" : ""}`}
                  onPress={handleSignIn}
                  disabled={!canSubmit}
                >
                  {signInLoading ? (
                    <ActivityIndicator color="#081126" />
                  ) : (
                    <Text className="auth-button-text">Sign In</Text>
                  )}
                </Pressable>

                {/* Forgot Password Link */}
                <View className="items-center">
                  <Link href="/(auth)/reset-password">
                    <Text className="auth-link">Forgot password?</Text>
                  </Link>
                </View>
              </View>
            </View>

            {/* Sign Up Link */}
            <View className="auth-link-row">
              <Text className="auth-link-copy">Don't have an account?</Text>
              <Link href="/(auth)/signup">
                <Text className="auth-link">Sign up</Text>
              </Link>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}