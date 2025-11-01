// components/publications-section.tsx
import React from 'react';
import { PublicationEntry } from './publication-entry'; // ← ファイル名に合わせる
import { 
  PublicationType, 
  publicationTypeLabels, 
  getGroupedAndSortedPublications 
} from '@/data/publication';

interface PublicationsSectionProps {
  language?: 'en' | 'ja';
}

export function PublicationsSection({ language = 'en' }: PublicationsSectionProps) {
  const groupedPublications = getGroupedAndSortedPublications();
  
  const typeOrder: PublicationType[] = [
    "international-conference-peer-reviewed",
    "journal-peer-reviewed",
    "international-conference-peer-reviewed-workshop",
    "domestic-conference-non-peer-reviewed",
    "domestic-symposium-non-peer-reviewed",
    "preprint",
    "other"
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 tracking-tight">
        PUBLICATIONS
      </h1>
      
      {typeOrder.map(type => {
        const publications = groupedPublications[type];
        
        if (publications.length === 0) return null;
        
        return (
          <div key={type} className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-zinc-800 tracking-tight">
              {publicationTypeLabels[type][language]}
            </h2>
            
            <div className="space-y-10">
              {publications.map((pub, index) => (
                <PublicationEntry key={`${type}-${index}`} publication={pub} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}