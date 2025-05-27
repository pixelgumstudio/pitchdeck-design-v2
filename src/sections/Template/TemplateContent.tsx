"use client";
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import TemplateCard from '@/component/template/TemplateCard';
import SkeletonCard from '@/component/SkeletonCard';
import EmptyPitch from '@/component/EmptyPitch';
import { useStore } from '@/store/useStore';
import { loadTemplates } from '@/lib/functions';
import { Template } from '@/store/types';

const TemplateContent: React.FC = () => {
  const { fetchTemplates, templates, setIsComponentLoading } = useStore();

  // Fetch templates with React Query
  const { data: loadedTemplates, isLoading } = useQuery('templates', loadTemplates);

  useEffect(() => {
    setIsComponentLoading(isLoading);

    if (loadedTemplates) {
      fetchTemplates(loadedTemplates);
    }
  }, [isLoading, loadedTemplates, fetchTemplates, setIsComponentLoading]);

  // Show skeletons during loading
  if (isLoading) {
    return (
      <div className="w-full laptop:max-w-[1152px] mx-auto pt-[25px] pb-[40px] tablet:pb-[80px] laptop:pb-[100px] grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 tablet:gap-[30px]">
        {[...Array(3)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  // Show empty state if no templates are available
  if (!templates || templates.length === 0) {
    return <EmptyPitch />;
  }

  // Show template cards
  return (
    <div className="w-full bg-white" id="pricing">
      <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 pt-[25px] pb-[40px] tablet:pb-[80px] laptop:pb-[100px]">
        <div className="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6 tablet:gap-[30px]">
          {templates.map((template: Template) => (
            <TemplateCard key={template._id} template={template} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateContent;
