/** @jsx h */

import { apply, h, tw } from "../client_deps.ts";
import {
  CATEGORIES,
  TableOfContentsCategory,
  TableOfContentsCategoryEntry,
} from "../data/jobs.ts";

export default function DocsSidebar(props: { path: string }) {
  return (
    <ol class={tw`list-decimal list-inside font-semibold` + " nested"}>
      {CATEGORIES.map((category: any) => (
        <SidebarCategory path={props.path} category={category} />
      ))}
    </ol>
  );
}

const link = apply`text(gray-900 hover:gray-600)`;
const linkActive = apply`text(blue-600 hover:blue-500)`;

export function SidebarCategory(props: {
  path: string;
  category: TableOfContentsCategory;
}) {
  const outerItem = tw`my-2 block`;
  const innerList = tw`pl-4 list-decimal` + " nested";

  const { title, href, entries } = props.category;
  const outerLink = tw`${href == props.path ? linkActive : link} font-bold`;

  return (
    <li class={outerItem}>
      <a href={href} class={outerLink}>
        {title}
      </a>
      {entries.length > 0 && (
        <ol class={innerList}>
          {entries.map((entry: any) => (
            <SidebarEntry path={props.path} entry={entry} />
          ))}
        </ol>
      )}
    </li>
  );
}

export interface SidebarEntryProps {
  path: string;
  entry: TableOfContentsCategoryEntry;
}

export function SidebarEntry({ path, entry }: SidebarEntryProps) {
  const innerItem = tw`my-0.5`;

  const { title, href } = entry;
  const innerLink = tw`${href == path ? linkActive : link} font-normal`;

  return (
    <li class={innerItem}>
      <a href={href} class={innerLink}>
        {title}
      </a>
    </li>
  );
}
