import Link from 'next/link';

interface Props {
  label: string;
}

export const Tag = ({ label }: Props) => {
  return (
    <a href="" className="tag-pill tag-default">
      {label}
    </a>
  );
};
