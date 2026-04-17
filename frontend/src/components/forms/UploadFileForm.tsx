import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import FileInput from "../FileInput";

interface UploadFileFormValues {
	clothingPhoto: File | null;
}

export const UploadFileForm = () => {
	const { control, handleSubmit } = useForm<UploadFileFormValues>({
		defaultValues: {
			clothingPhoto: null,
		},
	});

	const onSubmit = (data: UploadFileFormValues) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="upload-photo-form">
			<FileInput control={control} name="clothingPhoto" />
			<Button variant="outline-secondary" className="mt-3">
				Send
			</Button>
		</form>
	);
};
