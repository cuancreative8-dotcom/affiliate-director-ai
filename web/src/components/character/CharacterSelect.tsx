"use client";

import { characters } from "@/data/characters";
import { useDashboardStore } from "@/store/dashboardStore";

export default function CharacterSelect() {
  const character = useDashboardStore((state) => state.character);
    const setCharacter = useDashboardStore((state) => state.setCharacter);

      return (
          <div className="space-y-2">
                <label className="block text-sm font-semibold">
                        Character
                              </label>

                                    <select
                                            value={character}
                                                    onChange={(e) => setCharacter(e.target.value)}
                                                            className="w-full rounded-xl border p-3"
                                                                  >
                                                                          <option value="">
                                                                                    Pilih Character
                                                                                            </option>

                                                                                                    {characters
                                                                                                              .filter((item) => item.active)
                                                                                                                        .map((item) => (
                                                                                                                                    <option
                                                                                                                                                  key={item.id}
                                                                                                                                                                value={item.id}
                                                                                                                                                                            >
                                                                                                                                                                                          {item.name}
                                                                                                                                                                                                      </option>
                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                      </select>
                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                            );
                                                                                                                                                                                                                            }