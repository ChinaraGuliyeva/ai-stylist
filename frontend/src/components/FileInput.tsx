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

	const onDrop: DropzoneOptions["onDrop"] = (acceptedFiles) => {
		field.onChange(acceptedFiles[0]);
	};

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: { "image/*": [] },
		multiple: false,
	});

	return (
		<div
			{...getRootProps()}
			style={{ border: "2px dashed #ccc", padding: "20px", cursor: "pointer" }}
		>
			<input {...getInputProps()} />
			<p>Upload photo</p>
		</div>
	);
}

export default FileInput;
