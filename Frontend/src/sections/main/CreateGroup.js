import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormProvider from "../../components/hook-form/FormProvider";
import RHFTextField from "../../components/hook-form/RHFTextField";
import RHFAutocomplete from "../../components/hook-form/RHFAutocomplete";

const MEMBERS = ["Name 1", "Name 2", "Name 3", "Name 4", "Name 5"];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroupForm = ({ handleClose }) => {
  const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    members: Yup.array().min(2, "Must have at least 2 members"),
  });
  const defaultValues = {
    title: "",
    members: [],
  };
  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });
  const {
    handleSubmit,
  } = methods;

  const onSubmit = (data) => {
    try {
      //  API Call
      console.log("DATA", data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="title" label="Title" />
        <RHFAutocomplete
          name="members"
          label="Members"
          multiple
          freeSolo
          options={MEMBERS.map((option) => option)}
          ChipProps={{ size: "medium" }}
        />
        <Stack
          spacing={2}
          direction={"row"}
          alignItems="center"
          justifyContent={"end"}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Create
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

const CreateGroup = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >
      <DialogTitle sx={{ mb: 3 }}>Create New Group</DialogTitle>

      <DialogContent sx={{ mt: 4 }}>
        {/* Create Group Form */}
        {<CreateGroupForm handleClose={handleClose} />}
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroup;
