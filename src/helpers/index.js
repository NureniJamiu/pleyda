import axios from "axios";

export const onSubmit = async (
  values,
  actions,
  setIsLoading,
  setIsModalOpen
) => {
  if (!values) return;

  try {
    setIsLoading(true);
    await axios.post(
      "https://getform.io/f/eca02e34-5cbf-4259-8370-db5085a3c7ba",
      values
    );
    setIsLoading(false);
    setIsModalOpen(true);
    await delay(1000);
    actions.resetForm();
  } catch (error) {
    setIsLoading(false);
    console.error("Error:", error);
    await delay(1000);
    actions.resetForm();
  }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
