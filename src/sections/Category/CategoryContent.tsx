import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../component/LoadingComponent';
import CategoryArray from '../../component/CategoryArray';
import { useStore } from '../../store/useStore';
import { loadByCategory, loadTemplates } from '../../lib/functions';
import { categories } from '../../lib/category';

type CategoryContentProps = {
  title: string;
};

const CategoryContent: React.FC<CategoryContentProps> = ({ title }) => {
  const [tag, setTag] = useState<string>('');

  useEffect(() => {
    const found = categories.find(
      (cat) => cat.title.toLowerCase() === title.replace(/-/g, ' ')
    );
    if (found) setTag(found.tag);
  }, [title]);

  const { fetchTemplates, setIsComponentLoading, fetchCategory, componentLoading } = useStore();

  // Fetch Pitch based on query
  const { data: loadedCategory, isLoading } = useQuery(['category', tag], () => loadByCategory({ category: tag }), {
    enabled: !!tag,
  });

  // Fetch All Templates
  const { data: loadedTemplates } = useQuery('templates', loadTemplates);

  useEffect(() => {
    setIsComponentLoading(isLoading);
    if (loadedTemplates) fetchTemplates(loadedTemplates);
    if (loadedCategory) fetchCategory(loadedCategory);
  }, [
    componentLoading,
    fetchCategory,
    fetchTemplates,
    tag,
    loadedCategory,
    loadedTemplates,
    setIsComponentLoading,
    isLoading,
  ]);

  return (
    <div className='w-full bg-[#F2F1E8]' id='pricing'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 pb-[40px] tablet:pb-[80px] laptop:pb-[100px]'>
        <div className='grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6 tablet:gap-[30px] laptop:flex-row laptop:gap-[30px] min-h-[200px] relative h-fit'>
          <Loading />
          <CategoryArray />
        </div>
      </div>
    </div>
  );
};

export default CategoryContent;