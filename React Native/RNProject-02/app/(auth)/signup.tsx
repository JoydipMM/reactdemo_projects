import "@/global.css";
import { useAuth, useSignUp } from "@clerk/expo";
import { Link, Stack, useRouter } from "expo-router";
import { useState } from "react";
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

type SignUpStep = "details" | "verification";

export default function SignUp() {
  const router = useRouter();
  const { signUp, setActive } = useSignUp();
  const { isSignedIn } = useAuth();

  const [step, setStep] = useState<SignUpStep>("details");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [errors, setErrors] = useState<any>(null);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const getEmailError = () => {
    if (!email) return null;
    if (!isValidEmail(email)) return "Please enter a valid email address";
    if (errors?.errors && errors.errors.find((e: any) => e.meta?.paramName === 'email_address')) {
      return errors.errors.find((e: any) => e.meta?.paramName === 'email_address').message;
    }
    return null;
  };

  const getPasswordError = () => {
    if (!password) return null;
    if (password.length < 8)
      return "Password must be at least 8 characters";
    if (errors?.errors && errors.errors.find((e: any) => e.meta?.paramName === 'password')) {
      return errors.errors.find((e: any) => e.meta?.paramName === 'password').message;
    }
    return null;
  };

  const getConfirmPasswordError = () => {
    if (!confirmPassword) return null;
    if (password !== confirmPassword) return "Passwords do not match";
    return null;
  };

  const canSubmitDetails =
    email &&
    password &&
    confirmPassword &&
    isValidEmail(email) &&
    password.length >= 8 &&
    password === confirmPassword &&
    !signUpLoading;

  const canVerify = verificationCode.length >= 4 && !signUpLoading;

  const handleSignUp = async () => {
    if (!canSubmitDetails) return;

    Keyboard.dismiss();
    setSignUpLoading(true);
    setErrors(null);

    try {
      const signUpAttempt = await signUp.create({
        emailAddress: email,
        password,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/(tabs)");
        return;
      }

      // Send verification code
      if (typeof signUpAttempt.prepareVerification === "function") {
        await signUpAttempt.prepareVerification({ strategy: "email_code" });
      } else if (typeof signUpAttempt.prepareEmailAddressVerification === "function") {
        await signUpAttempt.prepareEmailAddressVerification({ strategy: "email_code" });
      } else {
        console.log("No prepare method found! Available:", Object.keys(signUpAttempt));
      }

      setStep("verification");
    } catch (err: any) {
      console.log("Sign up error:", err);
      setErrors(err);
    } finally {
      setSignUpLoading(false);
    }
  };

  const handleVerify = async () => {
    if (!canVerify) return;

    Keyboard.dismiss();
    setSignUpLoading(true);
    setErrors(null);

    try {
      const signUpAttempt = await signUp.attemptVerification({
        strategy: "email_code",
        code: verificationCode,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/(tabs)");
      } else {
        console.log("Verification incomplete:", signUpAttempt.status);
      }
    } catch (err: any) {
      console.log("Verification error:", err);
      setErrors(err);
    } finally {
      setSignUpLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (resendCooldown > 0) return;

    try {
      await signUp.prepareVerification({ strategy: "email_code" });
      setResendCooldown(60);
      setTimeout(() => setResendCooldown(0), 60000);
    } catch (err: any) {
      console.log("Resend code error:", err);
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
        <Stack.Screen options={{ headerShown: false }} />
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

            {step === "details" ? (
              /* Sign Up Form */
              <View className="auth-card">
                <Text className="auth-title">Create account</Text>
                <Text className="auth-subtitle">
                  Start tracking your subscriptions today
                </Text>

                <View className="auth-form">
                  {/* Email Field */}
                  <View className="auth-field">
                    <Text className="auth-label">Email</Text>
                    <TextInput
                      className={`auth-input ${getEmailError() ? "auth-input-error" : ""
                        }`}
                      placeholder="Enter your email"
                      placeholderTextColor="rgba(0, 0, 0, 0.4)"
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      editable={!signUpLoading}
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
                        className={`auth-input pr-12 ${getPasswordError() ? "auth-input-error" : ""
                          }`}
                        placeholder="Create a password"
                        placeholderTextColor="rgba(0, 0, 0, 0.4)"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        editable={!signUpLoading}
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
                    <Text className="auth-helper">At least 8 characters</Text>
                  </View>

                  {/* Confirm Password Field */}
                  <View className="auth-field">
                    <Text className="auth-label">Confirm Password</Text>
                    <TextInput
                      className={`auth-input ${getConfirmPasswordError() ? "auth-input-error" : ""
                        }`}
                      placeholder="Confirm your password"
                      placeholderTextColor="rgba(0, 0, 0, 0.4)"
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                      secureTextEntry={!showPassword}
                      editable={!signUpLoading}
                    />
                    {getConfirmPasswordError() && (
                      <Text className="auth-error">
                        {getConfirmPasswordError()}
                      </Text>
                    )}
                  </View>

                  {/* Sign Up Button */}
                  <Pressable
                    className={`auth-button ${!canSubmitDetails ? "auth-button-disabled" : ""
                      }`}
                    onPress={handleSignUp}
                    disabled={!canSubmitDetails}
                  >
                    {signUpLoading ? (
                      <ActivityIndicator color="#081126" />
                    ) : (
                      <Text className="auth-button-text">Create Account</Text>
                    )}
                  </Pressable>

                  {/* Bot Detection Placeholder */}
                  <View nativeID="clerk-captcha" />
                </View>
              </View>
            ) : (
              /* Verification Form */
              <View className="auth-card">
                <Text className="auth-title">Verify your email</Text>
                <Text className="auth-subtitle">
                  We've sent a verification code to{"\n"}
                  <Text className="font-sans-bold text-primary">{email}</Text>
                </Text>

                <View className="auth-form">
                  {/* Verification Code Field */}
                  <View className="auth-field">
                    <Text className="auth-label">Verification Code</Text>
                    <TextInput
                      className={`auth-input ${errors?.fields?.code ? "auth-input-error" : ""
                        } text-center tracking-widest`}
                      placeholder="Enter 6-digit code"
                      placeholderTextColor="rgba(0, 0, 0, 0.4)"
                      value={verificationCode}
                      onChangeText={(text) =>
                        setVerificationCode(text.replace(/[^0-9]/g, "").slice(0, 6))
                      }
                      keyboardType="number-pad"
                      maxLength={6}
                      textContentType="oneTimeCode"
                      editable={!signUpLoading}
                    />
                    {errors?.fields?.code && (
                      <Text className="auth-error">
                        {errors.fields.code.message}
                      </Text>
                    )}
                  </View>

                  {/* Verify Button */}
                  <Pressable
                    className={`auth-button ${!canVerify ? "auth-button-disabled" : ""
                      }`}
                    onPress={handleVerify}
                    disabled={!canVerify}
                  >
                    {signUpLoading ? (
                      <ActivityIndicator color="#081126" />
                    ) : (
                      <Text className="auth-button-text">Verify</Text>
                    )}
                  </Pressable>

                  {/* Resend Code */}
                  <View className="flex-row items-center justify-center gap-1">
                    <Text className="auth-link-copy">Didn't receive the code?</Text>
                    <Pressable
                      onPress={handleResendCode}
                      disabled={resendCooldown > 0}
                    >
                      <Text
                        className={`auth-link ${resendCooldown > 0 ? "opacity-50" : ""
                          }`}
                      >
                        {resendCooldown > 0
                          ? `Resend (${resendCooldown}s)`
                          : "Resend"}
                      </Text>
                    </Pressable>
                  </View>

                  {/* Go Back */}
                  <Pressable
                    className="auth-secondary-button"
                    onPress={() => setStep("details")}
                  >
                    <Text className="auth-secondary-button-text">
                      Go Back
                    </Text>
                  </Pressable>
                </View>
              </View>
            )}

            {/* Sign In Link */}
            {step === "details" && (
              <View className="auth-link-row">
                <Text className="auth-link-copy">Already have an account?</Text>
                <Link href="/(auth)/signin">
                  <Text className="auth-link">Sign in</Text>
                </Link>
              </View>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}