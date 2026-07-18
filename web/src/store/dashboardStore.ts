import { create } from "zustand";

interface DashboardState {
  productImage: File | null;
    setProductImage: (file: File | null) => void;

      productLink: string;
        setProductLink: (link: string) => void;

          category: string;
            setCategory: (value: string) => void;

              character: string;
                setCharacter: (value: string) => void;

                  modelPhoto: File | null;
                    setModelPhoto: (file: File | null) => void;

                      pov: string;
                        setPov: (value: string) => void;

                          visualStyle: string;
                            setVisualStyle: (value: string) => void;

                              emotion: string;
                                setEmotion: (value: string) => void;

                                  activity: string;
                                    setActivity: (value: string) => void;

                                      reset: () => void;
                                      }

                                      export const useDashboardStore = create<DashboardState>((set) => ({
                                        productImage: null,
                                          setProductImage: (file) =>
                                              set({ productImage: file }),

                                                productLink: "",
                                                  setProductLink: (link) =>
                                                      set({ productLink: link }),

                                                        category: "",
                                                          setCategory: (value) =>
                                                              set({ category: value }),

                                                                character: "",
                                                                  setCharacter: (value) =>
                                                                      set({ character: value }),

                                                                        modelPhoto: null,
                                                                          setModelPhoto: (file) =>
                                                                              set({ modelPhoto: file }),

                                                                                pov: "",
                                                                                  setPov: (value) =>
                                                                                      set({ pov: value }),

                                                                                        visualStyle: "",
                                                                                          setVisualStyle: (value) =>
                                                                                              set({ visualStyle: value }),

                                                                                                emotion: "",
                                                                                                  setEmotion: (value) =>
                                                                                                      set({ emotion: value }),

                                                                                                        activity: "",
                                                                                                          setActivity: (value) =>
                                                                                                              set({ activity: value }),

                                                                                                                reset: () =>
                                                                                                                    set({
                                                                                                                          productImage: null,
                                                                                                                                productLink: "",
                                                                                                                                      category: "",
                                                                                                                                            character: "",
                                                                                                                                                  modelPhoto: null,
                                                                                                                                                        pov: "",
                                                                                                                                                              visualStyle: "",
                                                                                                                                                                    emotion: "",
                                                                                                                                                                          activity: "",
                                                                                                                                                                              }),
                                                                                                                                                                              }));