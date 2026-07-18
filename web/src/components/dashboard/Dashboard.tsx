"use client";

import Header from "@/components/layout/Header";

import UploadProduct from "@/components/upload/UploadProduct";
import CategorySelect from "@/components/category/CategorySelect";
import CharacterSelect from "@/components/character/CharacterSelect";
import ModelPhotoUpload from "@/components/dashboard/ModelPhotoUpload";
import PovSelect from "@/components/pov/PovSelect";
import VisualStyleSelect from "@/components/style/VisualStyleSelect";
import EmotionSelect from "@/components/emotion/EmotionSelect";
import ActivitySelect from "@/components/activity/ActivitySelect";
import GenerateButton from "@/components/generate/GenerateButton";

import { useDashboardStore } from "@/store/dashboardStore";

export default function Dashboard() {
  const character = useDashboardStore((state) => state.character);

    return (
        <main className="min-h-screen bg-slate-100 p-6">
              <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
                      <Header />

                              <div className="space-y-5">
                                        <UploadProduct />

                                                  <CategorySelect />

                                                            <CharacterSelect />

                                                                      <ModelPhotoUpload
                                                                                  visible={character === "photo-model"}
                                                                                            />

                                                                                                      <PovSelect />

                                                                                                                <VisualStyleSelect />

                                                                                                                          <EmotionSelect />

                                                                                                                                    <ActivitySelect />

                                                                                                                                              <GenerateButton />
                                                                                                                                                      </div>
                                                                                                                                                            </div>
                                                                                                                                                                </main>
                                                                                                                                                                  );
                                                                                                                                                                  }