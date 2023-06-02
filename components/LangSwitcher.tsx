'use client'
import { useRouter } from "next/navigation";
import {usePathname} from 'next-intl/client';
import { ChangeEvent, useTransition } from "react";

const LangSwitcher = ({
  locale,
  styles
}: {locale: string, styles: string}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    startTransition(() => {
      router.replace(`/${event.target.value}${pathname}`);
    });
  }
  return (
    <select 
        name="langSwitcher" 
        id="langSwitcher" 
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
        className={styles}
      >
        {['Es', 'En'].map((lang) => {
          return (
            <option key={lang} value={lang.toLowerCase()}>{lang}</option>
          )
        })}
      </select>
  )
}

export default LangSwitcher