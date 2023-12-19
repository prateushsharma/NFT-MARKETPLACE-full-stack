import Link, { LinkProps as NextLinkProps } from "next/link";
import React, { FunctionComponent, ReactElement } from "react";
import { useRouter } from "next/router";

type LinkProps = {
  href: string;
  children: ReactElement;
  activeClass: string;
} & NextLinkProps; // Extend NextLinkProps

const ActiveLink: FunctionComponent<LinkProps> = ({ children, activeClass, ...props }) => {
  const { pathname } = useRouter();
  const isCurrent = pathname === props.href;

  const combinedClassNames = [
    children.props.className || '',
    'text-gray-100',
    isCurrent ? 'text-indigo-400' : '',
    isCurrent && activeClass ? activeClass : '',
    isCurrent ? 'bg-gray-900 text-white' : '',
  ].filter(Boolean).join(' ');

  return (
    <Link {...props}>
      {React.cloneElement(children, { className: combinedClassNames } as React.HTMLAttributes<HTMLAnchorElement>)}
    </Link>
  );
};

export default ActiveLink;
