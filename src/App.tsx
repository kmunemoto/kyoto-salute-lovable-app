import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import { LanguageProvider } from "./i18n/LanguageContext";
import type { Lang } from "./i18n/translations";
import AnalyticsTracker from "./components/AnalyticsTracker";

// Route-level code splitting: keep the landing page (Index) in the main bundle
// for fastest first paint, and lazy-load everything else so the blog content
// (~100KB of text) and secondary pages don't bloat the initial download.
const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const Terms = lazy(() => import("./pages/Terms.tsx"));
const Tokusho = lazy(() => import("./pages/Tokusho.tsx"));
const DropIn = lazy(() => import("./pages/DropIn.tsx"));
const AreaPage = lazy(() => import("./pages/AreaPage.tsx"));
const ReviewThanks = lazy(() => import("./pages/ReviewThanks.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<LanguageProvider lang={"ja" as Lang}><Index /></LanguageProvider>} />
            <Route path="/en" element={<LanguageProvider lang={"en" as Lang}><Index /></LanguageProvider>} />
            <Route path="/zh" element={<LanguageProvider lang={"zh" as Lang}><Index /></LanguageProvider>} />
            <Route path="/zh-tw" element={<LanguageProvider lang={"zhTW" as Lang}><Index /></LanguageProvider>} />
            <Route path="/ko" element={<LanguageProvider lang={"ko" as Lang}><Index /></LanguageProvider>} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/tokusho" element={<Tokusho />} />
            <Route path="/drop-in" element={<DropIn />} />
            <Route path="/area/:slug" element={<LanguageProvider lang={"ja" as Lang}><AreaPage /></LanguageProvider>} />
            <Route path="/review" element={<LanguageProvider lang={"ja" as Lang}><ReviewThanks /></LanguageProvider>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
