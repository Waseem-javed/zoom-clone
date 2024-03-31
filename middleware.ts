import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/sign-in", "/sign-up"],
});

export const config = {
  debug: true,
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  publicRoutes: ["/((?!api|trpc))(_next.*|.+.[w]+$)", "/"],
};
