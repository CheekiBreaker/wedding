import React, { useState } from "react";
import "./body.style.scss";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Body = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDress, setSelectedDress] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const dresses = [
    {
      id: 1,
      name: "Платье Амелия",
      price: "15000 ₽",
      images: [
        "https://cataas.com/cat",
        "https://cataas.com/cat/says/hello",
        "https://cataas.com/cat/says/hello?fontSize=50&fontColor=red",
      ],
      description:
        "Платье Амелия - идеальный выбор для романтичной невесты. Это платье сшито из шелка и украшено вышивкой бисером и стразами. Платье имеет глубокое V-образное декольте и открытую спину. Длина платья - до пола.",
    },
    {
      id: 2,
      name: "Платье Беатрис",
      price: "20000 ₽",
      images: [
                "https://cataas.com/cat",
        "https://cataas.com/cat/says/hello",
        "https://cataas.com/cat/says/hello?fontSize=50&fontColor=red",
      ],
      description:
        "Платье Беатрис - роскошное платье для настоящей королевы. Это платье сшито из атласа и украшено кристаллами Сваровски. Платье имеет пышную юбку и корсет с открытыми плечами. Длина платья - до пола.",
    },
    {
      id: 3,
      name: "Платье Беатрис",
      price: "20000 ₽",
      images: [
                "https://cataas.com/cat",
        "https://cataas.com/cat/says/hello",
        "https://cataas.com/cat/says/hello?fontSize=50&fontColor=red",
      ],
      description:
        "Платье Беатрис - роскошное платье для настоящей королевы. Это платье сшито из атласа и украшено кристаллами Сваровски. Платье имеет пышную юбку и корсет с открытыми плечами. Длина платья - до пола.",
    },
    {
      id: 4,
      name: "Платье Беатрис",
      price: "20000 ₽",
      images: [
                "https://cataas.com/cat",
        "https://cataas.com/cat/says/hello",
        "https://cataas.com/cat/says/hello?fontSize=50&fontColor=red",
      ],
      description:
        "Платье Беатрис - роскошное платье для настоящей королевы. Это платье сшито из атласа и украшено кристаллами Сваровски. Платье имеет пышную юбку и корсет с открытыми плечами. Длина платья - до пола.",
    },
    {
      id: 5,
      name: "Платье Беатрис",
      price: "20000 ₽",
      images: [
                "https://cataas.com/cat",
        "https://cataas.com/cat/says/hello",
        "https://cataas.com/cat/says/hello?fontSize=50&fontColor=red",
      ],
      description:
        "Платье Беатрис - роскошное платье для настоящей королевы. Это платье сшито из атласа и украшено кристаллами Сваровски. Платье имеет пышную юбку и корсет с открытыми плечами. Длина платья - до пола.",
    },
    {
      id: 6,
      name: "Платье Беатрис",
      price: "20000 ₽",
      images: [
                "https://cataas.com/cat",
        "https://cataas.com/cat/says/hello",
        "https://cataas.com/cat/says/hello?fontSize=50&fontColor=red",
      ],
      description:
        "Платье Беатрис - роскошное платье для настоящей королевы. Это платье сшито из атласа и украшено кристаллами Сваровски. Платье имеет пышную юбку и корсет с открытыми плечами. Длина платья - до пола.",
    },
    {
      id: 7,
      name: "Платье Беатрис",
      price: "20000 ₽",
      images: [
                "https://cataas.com/cat",
        "https://cataas.com/cat/says/hello",
        "https://cataas.com/cat/says/hello?fontSize=50&fontColor=red",
      ],
      description:
        "Платье Беатрис - роскошное платье для настоящей королевы. Это платье сшито из атласа и украшено кристаллами Сваровски. Платье имеет пышную юбку и корсет с открытыми плечами. Длина платья - до пола.",
    },
    {
      id: 8,
      name: "Платье Беатрис",
      price: "20000 ₽",
      images: [
                "https://cataas.com/cat",
        "https://cataas.com/cat/says/hello",
        "https://cataas.com/cat/says/hello?fontSize=50&fontColor=red",
      ],
      description:
        "Платье Беатрис - роскошное платье для настоящей королевы. Это платье сшито из атласа и украшено кристаллами Сваровски. Платье имеет пышную юбку и корсет с открытыми плечами. Длина платья - до пола.",
    },
    {
      id: 9,
      name: "Платье Беатрис",
      price: "20000 ₽",
      images: [
                "https://cataas.com/cat",
        "https://cataas.com/cat/says/hello",
        "https://cataas.com/cat/says/hello?fontSize=50&fontColor=red",
      ],
      description:
        "Платье Беатрис - роскошное платье для настоящей королевы. Это платье сшито из атласа и украшено кристаллами Сваровски. Платье имеет пышную юбку и корсет с открытыми плечами. Длина платья - до пола.",
    },
    {
      id: 10,
      name: "Платье Беатрис",
      price: "20000 ₽",
      images: [
                "https://cataas.com/cat",
        "https://cataas.com/cat/says/hello",
        "https://cataas.com/cat/says/hello?fontSize=50&fontColor=red",
      ],
      description:
        "Платье Беатрис - роскошное платье для настоящей королевы. Это платье сшито из атласа и украшено кристаллами Сваровски. Платье имеет пышную юбку и корсет с открытыми плечами. Длина платья - до пола.",
    },
    {
      id: 11,
      name: "Платье Беатрис",
      price: "20000 ₽",
      images: [
                "https://cataas.com/cat",
        "https://cataas.com/cat/says/hello",
        "https://cataas.com/cat/says/hello?fontSize=50&fontColor=red",
      ],
      description:
        "Платье Беатрис - роскошное платье для настоящей королевы. Это платье сшито из атласа и украшено кристаллами Сваровски. Платье имеет пышную юбку и корсет с открытыми плечами. Длина платья - до пола.",
    },
    {
      id: 12,
      name: "Платье Беатрис",
      price: "20000 ₽",
      images: [
                "https://cataas.com/cat",
        "https://cataas.com/cat/says/hello",
        "https://cataas.com/cat/says/hello?fontSize=50&fontColor=red",
      ],
      description:
        "Платье Беатрис - роскошное платье для настоящей королевы. Это платье сшито из атласа и украшено кристаллами Сваровски. Платье имеет пышную юбку и корсет с открытыми плечами. Длина платья - до пола.",
    },
    {
      id: 3,
      name: "Платье Беатрис",
      price: "20000 ₽",
      images: [
                "https://cataas.com/cat",
        "https://cataas.com/cat/says/hello",
        "https://cataas.com/cat/says/hello?fontSize=50&fontColor=red",
      ],
      description:
        "Платье Беатрис - роскошное платье для настоящей королевы. Это платье сшито из атласа и украшено кристаллами Сваровски. Платье имеет пышную юбку и корсет с открытыми плечами. Длина платья - до пола.",
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  const openModal = (dress) => {
    setSelectedDress(dress);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDress(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < selectedDress.images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : selectedDress.images.length - 1
    );
  };
  return (
    <body className="body">
      <div className="container">
        <h1 className="body__title">Каталог свадебных платьев</h1>
        <div className="body__cards">
          {dresses.map((dress, dressIndex) => (
            <div
              className="body__card"
              key={dress.id}
              onClick={() => openModal(dress)}
              onMouseEnter={() => handleMouseEnter(dressIndex)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="body__card-inner"
                style={{
                  transform: `translateX(${
                    hoveredCard === dressIndex ? "-10%" : "0%"
                  })`,
                }}
              >
                {dress.images.map((image, imageIndex) => (
                  <div className="body__card-item" key={imageIndex}>
                    <img src={image} alt={dress.name} />
                  </div>
                ))}
              </div>
              <h2 className="body__card-title">{dress.name}</h2>
              <p className="body__card-price">{dress.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Dress Details"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "5px",
            maxWidth: "800px",
            width: "80%",
            height: "600px",
            overflowY: "auto",
          },
        }}
      >
        <button className="modal__close" onClick={closeModal}>
          &times;
        </button>
        {selectedDress && (
          <>
            <h2 className="modal__title">{selectedDress.name}</h2>
            <div className="modal__flex">
              <div className="modal__images">
                <img
                  src={selectedDress.images[currentImageIndex]}
                  alt={selectedDress.name}
                />{" "}
                <button
                  className="modal__arrow modal__arrow--left"
                  onClick={prevImage}
                >
                  &lt;
                </button>
                <button
                  className="modal__arrow modal__arrow--right"
                  onClick={nextImage}
                >
                  &gt;
                </button>
              </div>
              <div className="modal__desc">
                <p className="modal__description">
                  {selectedDress.description}
                </p>
                <p className="modal__price">{selectedDress.price}</p>
              </div>
            </div>
          </>
        )}
      </Modal>
    </body>
  );
};

export default Body;
