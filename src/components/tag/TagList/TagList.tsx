import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { Tag } from '..';
import { $selectedTag, $tagList } from '~/stores';

export const TagList: React.FC = () => {
  const tagListLoadable = useRecoilValueLoadable($tagList);
  const setSelectedTag = useSetRecoilState($selectedTag);

  switch (tagListLoadable.state) {
    case 'hasValue':
      return (
        <TagListContainer>
          {tagListLoadable.contents.tags?.map((tag) => (
            <Tag
              key={tag}
              label={tag}
              onClick={() => {
                setSelectedTag(tag);
              }}
            />
          )) ?? null}
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
