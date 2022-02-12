import { useRecoilValueLoadable } from 'recoil';
import { Tag } from '..';
import { $tagList } from '~/stores';

export const TagList: React.FC = () => {
  const tagListLoadable = useRecoilValueLoadable($tagList);

  switch (tagListLoadable.state) {
    case 'hasValue':
      return (
        <TagListContainer>
          {tagListLoadable.contents.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </TagListContainer>
      );
    case 'loading':
      return (
        <TagListContainer>
          <div>Loading...</div>
        </TagListContainer>
      );
    case 'hasError':
      throw tagListLoadable.contents;
  }
};

interface TagListContainerProps {
  children: React.ReactNode;
}

const TagListContainer = ({ children }: TagListContainerProps) => {
  return (
    <div className="sidebar">
      <p>Popular Tags</p>
      {children}
    </div>
  );
};
