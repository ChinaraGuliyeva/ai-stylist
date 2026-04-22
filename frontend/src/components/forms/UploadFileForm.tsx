import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import FileInput from "../FileInput";
import { useUploadClothingFileMutation } from "../../clothingApi";

interface UploadFileFormValues {
	clothingPhoto: File | null;
}

export const UploadFileForm = () => {
	const { control, handleSubmit, formState: { isValid, isDirty, isSubmitting } } = useForm<UploadFileFormValues>({
		defaultValues: {
			clothingPhoto: null,
		},
	});

	const [uploadClothingFile] = useUploadClothingFileMutation();

	const onSubmit = async (data: UploadFileFormValues) => {
		try {
			await uploadClothingFile(data.clothingPhoto).unwrap();
			console.log('File uploaded successfully!');
		} catch (err) {
			console.error('Failed to upload file:', err);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="upload-photo-form">
			<FileInput name="clothingPhoto" control={control} />
			<div className="d-flex justify-content-between mt-4">
				<Button variant="outline-secondary" type="submit"
					disabled={!isDirty || !isValid || isSubmitting}>
					Send
				</Button>
				<Button type="reset" variant="outline-danger">
					Cancel
				</Button>
			</div>
		</form>
	);
};
