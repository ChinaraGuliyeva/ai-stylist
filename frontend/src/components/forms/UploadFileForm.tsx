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
			{/* TO DO: Required - true */}
			<FileInput name="clothingPhoto" control={control} />
			<div className="d-flex justify-content-between mt-4">
				<Button variant="outline-secondary" disabled={true}>
					Send
				</Button>
				<Button type="reset" variant="outline-danger">
					Cancel
				</Button>
			</div>
		</form>
	);
};
