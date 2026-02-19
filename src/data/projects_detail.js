const projects = [
  {
    title: "Bzail Site Selection Tool",
    description: "The Bzail Site Selection Tool is a fully automated platform enabling brokers and developers to perform parcel intelligence using Agentic AI.",
    longDescription: "Bzail Site Selection Tool combines geospatial analytics, parcel-level data enrichment, and ML-driven scoring to help real estate developers and brokers shortlist optimal sites. The platform integrates mapping, spatial queries, and predictive models to automate site assessment workflows.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "PostGIS", "AWS", "React", "TypeScript", "Mapbox", "OpenAI"],
    icons: ["fab fa-python", "fas fa-server", "fas fa-database", "fab fa-aws", "fab fa-react"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=400&fit=crop",
    live: "https://app.baizel.ai/"
  },

  {
    title: "End-to-End Guard Service Automation using Zoho CRM & Zoho Books",
    description: "Automated quotation and invoicing workflow integrated with Zoho ecosystem reducing onboarding effort.",
    longDescription: "This project automated the end-to-end sales and billing process using Zoho CRM and Zoho Books. It includes quote generation, approval workflows, and automated invoice creation and delivery, reducing manual touchpoints and accelerating onboarding.",
    technologies: ["Flask", "React", "Zoho CRM", "Zoho Books", "Webhooks"],
    icons: ["fab fa-python", "fab fa-react", "fas fa-file-invoice"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop",
    video: "https://youtu.be/drI_J-anbps"
  },

  {
    title: "HubSpot Dropbox Integration",
    description: "CRM–Dropbox synchronization enabling automated document lifecycle and collaboration.",
    longDescription: "A robust integration platform that synchronizes files and metadata between HubSpot and Dropbox. Features include bi-directional sync, automated folder creation, and webhook-driven updates to maintain consistent document lifecycle across platforms.",
    technologies: ["Node.js", "HubSpot API", "Dropbox API", "Redis"],
    icons: ["fab fa-node-js", "fas fa-cloud", "fas fa-hdd"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=400&fit=crop",
    video: "https://youtu.be/AWGilgp66j0"
  },

  {
    title: "POS AUTOMATION",
    description: "Integrated NCR Aloha, QuBeyond, Clover and Square POS systems into enterprise software.",
    longDescription: "Integrated multiple POS vendors into a unified backend to capture orders, payments, and inventory events. Implemented middleware for event normalization, secure tokenization of payment data, and cloud-based deployment for scale and reliability.",
    technologies: ["Python", "AWS Cloud Formation", "AWS SAM"],
    icons: ["fab fa-python", "fab fa-aws", "fas fa-cash-register"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop",
    github: "https://github.com/dev-PankajK/Clover-POS-third-party-api-intg.git",
    video: "https://youtu.be/blSaRQ2o3ic"
  },

  {
    title: "FinChat: AI-Powered Assistant",
    description: "Financial multi-agent chatbot built using OpenAI and conversational orchestration.",
    longDescription: "FinChat is a conversational AI platform that orchestrates multiple agents for finance-specific tasks: account summarization, budget insights, and guided customer interactions. It supports secure data handling and custom prompts for domain-specific accuracy.",
    technologies: ["OpenAI", "Python", "NLP", "Machine Learning"],
    icons: ["fas fa-robot", "fab fa-python", "fas fa-brain"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=400&fit=crop",
    github: "https://github.com/dev-PankajK/Finchat.git",
    video: "https://youtu.be/U-jn0PO2mzg"
  },

  {
    title: "ChatPDF Powered by Azure - Automation",
    description: "Azure AI assistant using Blob Storage, Cognitive Search and Functions for automated document Q&A.",
    longDescription: "An Azure-based assistant that ingests documents into Blob Storage, indexes them using Cognitive Search, and answers queries using serverless functions and an LLM. The system handles ingestion pipelines and relevance tuning for production usage.",
    technologies: ["Azure AI", "Cognitive Search", "Python"],
    icons: ["fab fa-microsoft", "fas fa-cloud", "fas fa-file-alt"],
    image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=1200&h=400&fit=crop",
    github: "https://github.com/dev-PankajK/Azure_chatpdf.git"
  },

  {
    title: "SRS Agent: AI-Powered Medical Documentation",
    description: "AI agent detecting requirement gaps within SRS documents for regulated medical software.",
    longDescription: "SRS Agent analyzes software requirement specifications to detect missing or inconsistent requirements for regulated medical devices. It produces structured gap reports and suggested remediation to support compliance workflows.",
    technologies: ["OpenAI", "Python", "Medical AI"],
    icons: ["fas fa-notes-medical", "fas fa-file-medical-alt"],
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=400&fit=crop",
    github: "https://github.com/dev-PankajK/SRS_medical_softwares.git"
  },

  {
    title: "Peerbie AI Platform Integration",
    description: "Embedded AI-driven workflow automation and collaboration features into Peerbie platform.",
    longDescription: "Integrated generative AI features into Peerbie to automate content summarization, knowledge extraction, and collaborative workflows. Built APIs for embedding-based search and document understanding.",
    technologies: ["Python", "OpenAI", "FastAPI", "HuggingFace"],
    icons: ["fas fa-project-diagram", "fab fa-python"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=400&fit=crop"
  },

  {
    title: "RAG-Based Quotation PDF Generator",
    description: "Automated furniture quotation generation using RAG pipeline and vector database retrieval.",
    longDescription: "A retrieval-augmented generation pipeline for producing tailored furniture quotations as PDFs. Uses a vector DB for retrieval, template rendering, and automated PDF delivery to sales teams.",
    technologies: ["Flask", "React", "OpenAI", "Pinecone"],
    icons: ["fas fa-file-pdf", "fas fa-cogs"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=400&fit=crop"
  },

  {
    title: "Remote Photoplethysmography (rPPG) Pipeline",
    description: "Computer vision pipeline extracting physiological signals using Mediapipe and OpenCV.",
    longDescription: "An rPPG pipeline that extracts pulse and respiratory signals from video using MediaPipe and OpenCV, with signal processing and filtering for physiological analytics.",
    technologies: ["Python", "Mediapipe", "Computer Vision"],
    icons: ["fas fa-heartbeat", "fas fa-video"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=400&fit=crop"
  }
]

export default projects
