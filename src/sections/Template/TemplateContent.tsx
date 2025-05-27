"use client";
import { useEffect } from 'react';
import TemplateCard from '../../component/template/TemplateCard';
import { useQuery } from 'react-query';
import { loadTemplates } from '../../lib/functions';
import { useStore } from '../../store/useStore';
import { Template } from '../../store/types';



const TemplateContent: React.FC = () => {
  const { fetchTemplates, templates, setIsComponentLoading } = useStore();

  // Fetch All Templates
  const { data: loadedTemplates, isLoading } = useQuery('templates', loadTemplates);

  useEffect(() => {
    setIsComponentLoading(isLoading);
    if (loadedTemplates) fetchTemplates(loadedTemplates);
  }, [fetchTemplates, setIsComponentLoading, isLoading, loadedTemplates]);

  return (
    <div className='w-full bg-white' id='pricing'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 pt-[25px] pb-[40px] tablet:pb-[80px] laptop:pb-[100px]'>
        <div className='grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6 tablet:gap-[30px] laptop:flex-row laptop:gap-[30px]'>
          {templates?.map((item: Template) => (
            <TemplateCard
              key={item._id}
              template={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateContent;