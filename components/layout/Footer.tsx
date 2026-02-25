import { CVDownloadButton } from '@/components/ui/CVDownloadButton';
import { LinkedInButton } from '@/components/ui/LinkedInButton';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-grey-light">© 2025 Winny Kamga</p>
          <p className="text-caption text-grey-light mt-1">
            Candidature Ingénieur QEHS • L'Oréal Recherche & Innovation
          </p>
        </div>

        <div className="flex gap-4">
          <LinkedInButton />
          <CVDownloadButton />
        </div>
      </div>
    </footer>
  );
}
