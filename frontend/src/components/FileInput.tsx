import { useEffect, useState } from "react";
import { type DropzoneOptions, useDropzone } from "react-dropzone";
import {
	type FieldValues,
	type UseControllerProps,
	useController,
} from "react-hook-form";

interface FileInputProps<T extends FieldValues> extends UseControllerProps<T> {
	label?: string;
}

function FileInput<T extends FieldValues>({
	control,
	name,
}: FileInputProps<T>) {
	const { field } = useController({ control, name });
	const [preview, setPreview] = useState<string | null>(null);

	const onDrop: DropzoneOptions["onDrop"] = (acceptedFiles) => {
		field.onChange(acceptedFiles[0]);
		setPreview(URL.createObjectURL(acceptedFiles[0]));
	};

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: { "image/*": [] },
		multiple: false,
	});

	useEffect(() => {
		return () => {
			if (preview) URL.revokeObjectURL(preview);
		};
	}, [preview]);

	return (
		<div
			{...getRootProps()}
			className="file-form"
		>
			<input {...getInputProps()} />

			{preview ? (
				<img
					src={preview}
					alt="Preview"
					className="file-img"
				/>
			) : (
				<p className="text-center mt-4">Upload photo</p>)}
		</div>
	);
}

export default FileInput;
