
document.getElementById('ageInput').addEventListener('input', function () {
const age = parseInt(this.value);
const ageResult = document.getElementById('ageResult');
const cardImage = document.getElementById('cardImage');

ageResult.textContent = isNaN(age) ? 'Please enter a valid age.' : (age >= 18 ? 'প্রাপ্তবয়স্ক নাগরিক/You are an adult' : 'অপ্রাপ্তবয়স্ক/You are an Child');

cardImage.src = age >= 18 ? 'https://media.istockphoto.com/id/1179420343/photo/smiling-man-outdoors-in-the-city.jpg?s=2048x2048&w=is&k=20&c=RmGENIfd-NFklG4dzjIFdOkWqUj6RpZSlBiTtJ2DBw8=' : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_BC9dbVsI7i2PZI5qO83o2DteZ_JJT_0Y58FS951U8Srd5XruOQx4Bzpf2p9tbIiDBN6-FLGTAtEKm9drz9i_Hvd7DluU8aJN1w4tZBUY3wXCNNHmSxZ2nSvwXZPuUSPCz9t8dfTTpnoWOueRmNg5CnjzaPgBqws4o_Gtqm69UzupTVCLgmplFx4H9hVP/s1280/c28d2092-fbe6-46e1-8e74-d184a0217dfd.jpeg';
});
