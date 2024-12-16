"use client"

import Image from "next/image";
import { useRef, useState } from "react";

type ImagePickerConfig = {
    image: string | undefined;
    onSelection: (file: File) => void;
}

export default function ImagePicker(imagePickerConfig: ImagePickerConfig) {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState(imagePickerConfig.image);
    return (
        <>
            {image && <div className="text-center ">
                <div className="h-36 w-36 relative m-auto cursor-pointer rounded-full overflow-hidden" onClick={() => inputFileRef.current?.click()}>
                    <Image src={image} fill alt="facility icon" />
                </div>

            </div>
            }
            {image == undefined &&
                <div className="text-black border-dashed p-4 cursor-pointer text-xl border-2 border-background" onClick={() => inputFileRef.current?.click()}>
                    Click here to upload your facility Image
                </div>
            }

            <input
                type="file"
                ref={inputFileRef}
                // onClick={(e) => {
                //     e.target.value = null
                // }}
                onChangeCapture={onFileChangeCapture}
                hidden
            />
        </>
    );

    function onFileChangeCapture(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            imagePickerConfig.onSelection(e.target.files[0]);
            setImage(URL.createObjectURL(e.target.files[0]))
        }
    };
}