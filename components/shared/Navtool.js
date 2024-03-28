import { useEffect, useRef } from 'react';

const Navtool = () => {
  const cartRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const handleCartClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (cartRef.current) {
        cartRef.current.classList.add("isActive");
      }
    };

    const handleInfoClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (infoRef.current) {
        infoRef.current.classList.add("isActive");
      }
    };

    const handleBodyClick = () => {
      if (infoRef.current) {
        infoRef.current.classList.remove("isActive");
      }
      if (cartRef.current) {
        cartRef.current.classList.remove("isActive");
      }
    };

    document.body.addEventListener("click", handleBodyClick);

    const sidebarWidgets = document.querySelectorAll(".xs-sidebar-widget");
    sidebarWidgets.forEach(widget => {
      widget.addEventListener("click", (e) => e.stopPropagation());
    });

    const modalPopups = document.querySelectorAll(".xs-modal-popup");
    modalPopups.forEach(popup => {
      $(popup).magnificPopup({
        type: "inline",
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: "auto",
        closeBtnInside: false,
        callbacks: {
          beforeOpen: function () {
            this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
          },
        },
      });
    });

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  return (
    <div>
      {/* Your JSX content here */}
    </div>
  );
};

export default Navtool;

