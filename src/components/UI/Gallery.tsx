import galleryImg1 from "../../../public/assets/images/gallery/gallery-1.1.png";
import galleryImg2 from "../../../public/assets/images/gallery/gallery-1.1.png";
import galleryImg3 from "../../../public/assets/images/gallery/gallery-1.2.png";
import galleryImg4 from "../../../public/assets/images/gallery/gallery-2.jpg";
import galleryImg5 from "../../../public/assets/images/gallery/gallery-2.1.jpg";
import galleryImg6 from "../../../public/assets/images/gallery/gallery-2.2.jpg";
import galleryImg7 from "../../../public/assets/images/gallery/gallery-3.jpeg";
import galleryImg8 from "../../../public/assets/images/gallery/gallery-3.1.jpeg";
import galleryImg9 from "../../../public/assets/images/gallery/gallery-3.3.jpeg";
import ModalImage from "react-modal-image";

const Gallery = () => {
  return (
    <div>
      <section className="py-10 container mx-auto">
        {/* section title */}
        <div>
          <h2 className="text-center my-10 text-2xl md:text-3xl lg:text-4xl font-bold text-[#fd614a]">
            Our Gallery
          </h2>
        </div>
        <div className="bg-white pt-5 pb-10">
          <div className="grid md:grid-cols-3 gap-5 pb-3.5 px-14">
            {/* gallery column 1 */}
            <div>
              <div className="galleryImg ">
                <ModalImage
                  small={galleryImg1.src}
                  large={galleryImg1.src}
                  alt="gallery image-1"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4 pt-4">
                <div>
                  <div className="galleryImg">
                    <ModalImage
                      small={galleryImg2.src}
                      large={galleryImg2.src}
                      alt="gallery image-1"
                    />
                  </div>
                </div>
                <div>
                  <div className="galleryImg" style={{ maxWidth: "800px" }}>
                    <ModalImage
                      small={galleryImg3.src}
                      large={galleryImg3.src}
                      alt="gallery image-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* gallery column 2 */}
            <div>
              <div className="galleryImg ">
                <ModalImage
                  small={galleryImg4.src}
                  large={galleryImg4.src}
                  alt="gallery image-1"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4 pt-4">
                <div>
                  <div className="galleryImg">
                    <ModalImage
                      small={galleryImg5.src}
                      large={galleryImg5.src}
                      alt="gallery image-1"
                    />
                  </div>
                </div>
                <div>
                  <div className="galleryImg ">
                    <ModalImage
                      small={galleryImg6.src}
                      large={galleryImg6.src}
                      alt="gallery image-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* gallery column 3 */}
            <div>
              <div className="galleryImg">
                <ModalImage
                  small={galleryImg7.src}
                  large={galleryImg7.src}
                  alt="gallery image-1"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4 pt-4">
                <div>
                  <div className="galleryImg">
                    <ModalImage
                      small={galleryImg8.src}
                      large={galleryImg8.src}
                      alt="gallery image-1"
                    />
                  </div>
                </div>
                <div>
                  <div className="galleryImg ">
                    <ModalImage
                      small={galleryImg9.src}
                      large={galleryImg9.src}
                      alt="gallery image-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
