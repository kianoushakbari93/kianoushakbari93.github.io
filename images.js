// Image processing for a new person

const newPersonImageReader = new FileReader();

newPersonImageReader.onload = () => {
  document.getElementById("Images").value =
    newPersonImageReader.result;
};

const newPersonImageInput = document.getElementById("newPersonImageInput");

newPersonImageInput.onchange = () => {
  newPersonImageReader.readAsDataURL(newPersonImageInput.files[0]);
};

// Image processing for editing a person
const editPersonImageReader = new FileReader();

const setupEditImageLoader = () => {
  editPersonImageReader.onload = () => {
    document.getElementById("editPersonDataUrl").value =
      editPersonImageReader.result;
  };

  const editPersonImageInput = document.getElementById("editImage");

  editPersonImageInput.onchange = () => {
    editPersonImageReader.readAsDataURL(editPersonImageInput.files[0]);
  };
};
