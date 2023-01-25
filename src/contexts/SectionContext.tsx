import { IActions, ISection, TRegister } from '@/types/section';
import { createContext, ReactNode, useCallback, useContext, useMemo, useRef, useState } from 'react';

const SectionContext = createContext<IActions | null>(null);

export const SectionContextProvider = ({ children }: { children: ReactNode }) => {
  const sections = useRef<ISection[]>([]);
  const sectionId = useRef(1);

  const register: TRegister = useCallback((name) => {
    return {
      ref: (element) => {
        sections.current.push({ id: sectionId.current, name, element });
        sectionId.current += 1;
      },
    };
  }, []);

  const actions = useMemo(() => {
    return {
      sections,
      register,
    };
  }, [register]);

  return <SectionContext.Provider value={actions}>{children}</SectionContext.Provider>;
};

export const useSection = () => {
  const c = useContext(SectionContext);

  if (!c) throw new Error();

  return c;
};
