import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import NotFound from "./pages/NotFound.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import Terms from "./pages/Terms.tsx";
import Tokusho from "./pages/Tokusho.tsx";
import DropIn from "./pages/DropIn.tsx";
import { LanguageProvider } from "./i18n/LanguageContext";
import type { Lang } from "./i18n/translations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LanguageProvider lang={"ja" as Lang}><Index /></LanguageProvider>} />
          <Route path="/en" element={<LanguageProvider lang={"en" as Lang}><Index /></LanguageProvider>} />
          <Route path="/zh" element={<LanguageProvider lang={"zh" as Lang}><Index /></LanguageProvider>} />
          <Route path="/ko" element={<LanguageProvider lang={"ko" as Lang}><Index /></LanguageProvider>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/tokusho" element={<Tokusho />} />
          <Route path="/drop-in" element={<DropIn />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
