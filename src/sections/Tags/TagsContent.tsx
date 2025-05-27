"use client"

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../component/LoadingComponent';
import TagsArray from '../../component/TagsArray';
import { useStore } from '../../store/useStore';
import { loadPitches, loadTemplates } from '../../lib/functions';
import { tags } from '../../lib/category';

type TagsContentProps = {
  title: string;
};

const TagsContent: React.FC<TagsContentProps> = ({ title }) => {
  const [tag, setTag] = useState<string>('');

  useEffect(() => {
    const found = tags.find(cat => cat.title.toLowerCase() === title.replace(/-/g, ' '));
    if (found) setTag(found.tag);
  }, [title]);

  const { fetchTemplates, setIsComponentLoading, fetchPitches, componentLoading } = useStore();

  // Fetch Pitch based on query
  const { data: loadedPitches, isLoading } = useQuery({
    queryKey: ['pitches'],
    queryFn: loadPitches,
  });

  // Fetch All Templates
  const { data: loadedTemplates } = useQuery({
    queryKey: ['templates'],
    queryFn: loadTemplates,
  });

  useEffect(() => {
    setIsComponentLoading(isLoading);
    if (loadedTemplates) fetchTemplates(loadedTemplates);
    if (loadedPitches) fetchPitches(loadedPitches);
  }, [
    componentLoading,
    fetchPitches,
    fetchTemplates,
    isLoading,
    loadedPitches,
    loadedTemplates,
    setIsComponentLoading,
  ]);

  return (
    <div className='w-full bg-[#F2F1E8]' id='pricing'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 pb-[40px] tablet:pb-[80px] laptop:pb-[100px]'>
        <div className='grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6 tablet:gap-[30px] laptop:flex-row laptop:gap-[30px] min-h-[200px] relative h-fit'>
          <Loading />
          <TagsArray tag={tag} />
        </div>
      </div>
    </div>
  );
};

export default TagsContent;