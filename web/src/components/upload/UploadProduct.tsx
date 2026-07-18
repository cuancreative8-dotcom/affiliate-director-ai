export default function UploadProduct() {
      return (
          <div className="space-y-4">

                <div>
                        <label className="block text-sm font-semibold mb-2">
                                  Upload Foto Produk
                                          </label>

                                                  <input
                                                            type="file"
                                                                      accept="image/*"
                                                                                className="w-full border rounded-xl p-3"
                                                                                        />
                                                                                              </div>

                                                                                                    <div>
                                                                                                            <label className="block text-sm font-semibold mb-2">
                                                                                                                      atau Tempel Link Produk
                                                                                                                              </label>

                                                                                                                                      <input
                                                                                                                                                type="url"
                                                                                                                                                          placeholder="https://contoh-produk.com"
                                                                                                                                                                    className="w-full border rounded-xl p-3"
                                                                                                                                                                            />
                                                                                                                                                                                  </div>

                                                                                                                                                                                      </div>
                                                                                                                                                                                        );
                                                                                                                                                                                        }
