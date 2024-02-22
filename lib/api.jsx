export const sendContactForm = async (formData) => {
  try {

    const form = new FormData();

    for (const key in formData) {
      form.append(key, formData[key]);
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      body: form, 
    });


    if (!response.ok) {
      throw new Error("Failed to send message");
    }


    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error; 
  }
};
