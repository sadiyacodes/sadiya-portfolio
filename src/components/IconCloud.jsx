import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
 
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "java",
  "vercel",
  "netlify",
  "git",
  "github",
  "visualstudiocode",
  "mysql",
  "mongodb",
  "postman",
  "sap",
  "redux",
  "bootstrap"
];

export function IconCloudDemo() {
  return (
    
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background px-20 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
