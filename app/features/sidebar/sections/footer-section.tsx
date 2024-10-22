import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { SocialButton } from "../components/social-buttons";

interface FooterSectionProps {
  isExpanded: boolean;
}

export function FooterSection({ isExpanded }: FooterSectionProps) {
  return (
    <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-900">
      <div
        className={`flex ${
          isExpanded ? "justify-between" : "flex-col space-y-2"
        } mb-2`}
      >
        <SocialButton
          href="https://github.com/DinitoThompson"
          icon={<Github className="h-4 w-4" />}
        />
        <SocialButton
          href="https://www.linkedin.com/in/dinito-thompson/"
          icon={<Linkedin className="h-4 w-4" />}
        />
        <SocialButton
          href="mailto:your.dinitothompson@gmail.com"
          icon={<Mail className="h-4 w-4" />}
        />
        <SocialButton
          href="https://drive.google.com/drive/folders/1gewsLO8TAwmCM2ugSrGCNH1zWaQfGVBl?usp=sharing"
          icon={<FileText className="h-4 w-4" />}
        />
      </div>
    </div>
  );
}
