interface ModelPhotoUploadProps {
      visible: boolean;
      }

      export default function ModelPhotoUpload({
        visible,
        }: ModelPhotoUploadProps) {
          if (!visible) return null;

            return (
                <div className="space-y-2">
                      <label className="block text-sm font-semibold">
                              Upload Foto Model
                                    </label>

                                          <input
                                                  type="file"
                                                          accept="image/*"
                                                                  className="w-full rounded-xl border p-3"
                                                                        />

                                                                              <p className="text-xs text-gray-500">
                                                                                      Upload satu foto model yang akan digunakan sebagai referensi AI.
                                                                                            </p>
                                                                                                </div>
                                                                                                  );
                                                                                                  }