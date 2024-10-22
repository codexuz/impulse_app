

export const feedbackSpeaking = async (response) => {
  const formData = new FormData();
  formData.append("userResponse", response);
  
  const res = await fetch("https://edumoacademy.uz/api/feed", {
    method: 'POST',
    body: formData
  })

  const data = await res.json()
  return data
}