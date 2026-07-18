'use client';

import { useState } from 'react';

export default function Home() {
  const [started, setStarted] = useState(false);

    if (started) {
        return (
              <main className="min-h-screen flex items-center justify-center bg-gray-100">
                      <div className="text-center">
                                <h1 className="text-3xl font-bold">Dashboard</h1>
                                          <p className="mt-2 text-gray-600">Coming Soon...</p>
                                                  </div>
                                                        </main>
                                                            );
                                                              }

                                                                return (
                                                                    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
                                                                          <div className="text-center max-w-md">
                                                                                  <div className="text-5xl mb-6">🚀</div>

                                                                                          <h1 className="text-4xl font-bold">
                                                                                                    Affiliate Director AI
                                                                                                            </h1>

                                                                                                                    <p className="mt-4 text-gray-600">
                                                                                                                              AI Cerdas untuk Membuat Konten Affiliate yang Menghasilkan
                                                                                                                                      </p>

                                                                                                                                              <button
                                                                                                                                                        onClick={() => setStarted(true)}
                                                                                                                                                                  className="mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl transition"
                                                                                                                                                                          >
                                                                                                                                                                                    Mulai Sekarang
                                                                                                                                                                                            </button>
                                                                                                                                                                                                  </div>
                                                                                                                                                                                                      </main>
                                                                                                                                                                                                        );
                                                                                                                                                                                                        }