import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhay Rathor — Python Developer, GenAI & RAG Systems" },
      {
        name: "description",
        content:
          "Portfolio of Abhay Rathor — Python developer building production RAG pipelines, Django backends, and industrial automation systems that don't break at 2 AM.",
      },
      { property: "og:title", content: "Abhay Rathor — Python Developer, GenAI & RAG Systems" },
      {
        property: "og:description",
        content:
          "Production Python, LangChain, Django, and industrial IoT — systems that run on factory floors and stay up 24/7.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});