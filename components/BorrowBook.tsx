// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { toast } from "@/hooks/use-toast";
// import { borrowBook } from "@/lib/actions/book";

// interface Props {
//   userId: string;
//   bookId: string;
//   borrowingEligibility: {
//     isEligible: boolean;
//     message: string;
//   };
// }

// const BorrowBook = ({
//   userId,
//   bookId,
//   borrowingEligibility: { isEligible, message },
// }: Props) => {
//   const router = useRouter();
//   const [borrowing, setBorrowing] = useState(false);

//   const handleBorrowBook = async () => {
//     if (!isEligible) {
//       toast({
//         title: "Error",
//         description: message,
//         variant: "destructive",
//       });
//     }

//     setBorrowing(true);

//     try {
//       const result = await borrowBook({ bookId, userId });

//       if (result.success) {
//         toast({
//           title: "Success",
//           description: "Book borrowed successfully",
//         });

//         router.push("/my-profile");
//       } else {
//         toast({
//           title: "Error",
//           description: result.error,
//           variant: "destructive",
//         });
//       }
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "An error occurred while borrowing the book",
//         variant: "destructive",
//       });
//     } finally {
//       setBorrowing(false);
//     }
//   };

//   return (
//     <Button
//       className="book-overview_btn"
//       onClick={handleBorrowBook}
//       disabled={borrowing}
//     >
//       <Image src="/icons/book.svg" alt="book" width={20} height={20} />
//       <p className="font-bebas-neue text-xl text-dark-100">
//         {borrowing ? "Borrowing ..." : "Borrow Book"}
//       </p>
//     </Button>
//   );
// };
// export default BorrowBook;

// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { toast } from "@/hooks/use-toast";
// import { borrowBook } from "@/lib/actions/book";

// interface Props {
//   userId: string;
//   bookId: string;
//   borrowingEligibility?: {
//     isEligible: boolean;
//     message: string;
//   };
// }

// const BorrowBook = ({ userId, bookId, borrowingEligibility }: Props) => {
//   const router = useRouter();
//   const [borrowing, setBorrowing] = useState(false);

//   // Use optional chaining to avoid errors if borrowingEligibility is undefined
//   const isEligible = borrowingEligibility?.isEligible ?? false;
//   const message = borrowingEligibility?.message ?? "Eligibility data unavailable.";

//   const handleBorrowBook = async () => {
//     if (!isEligible) {
//       toast({
//         title: "Error",
//         description: message,
//         variant: "destructive",
//       });
//       return; // Stop execution if not eligible
//     }

//     setBorrowing(true);

//     try {
//       const result = await borrowBook({ bookId, userId });

//       if (result.success) {
//         toast({ title: "Success", description: "Book borrowed successfully" });
//         router.push("/my-profile");
//       } else {
//         toast({ title: "Error", description: result.error, variant: "destructive" });
//       }
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "An error occurred while borrowing the book",
//         variant: "destructive",
//       });
//     } finally {
//       setBorrowing(false);
//     }
//   };

//   return (
//     <Button className="book-overview_btn" onClick={handleBorrowBook} disabled={borrowing}>
//       <Image src="/icons/book.svg" alt="book" width={20} height={20} />
//       <p className="font-bebas-neue text-xl text-dark-100">
//         {borrowing ? "Borrowing ..." : "Borrow Book"}
//       </p>
//     </Button>
//   );
// };

// export default BorrowBook;


// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner"; // ✅ Import Sonner
// import { borrowBook } from "@/lib/actions/book";

// interface Props {
//   userId: string;
//   bookId: string;
//   borrowingEligibility?: {
//     isEligible: boolean;
//     message: string;
//   };
// }

// const BorrowBook = ({ userId, bookId, borrowingEligibility }: Props) => {
//   const router = useRouter();
//   const [borrowing, setBorrowing] = useState(false);

//   // Ensure eligibility is handled properly
//   const isEligible = borrowingEligibility?.isEligible ?? false;
//   const message = borrowingEligibility?.message ?? "Eligibility data unavailable.";

//   const handleBorrowBook = async () => {
//     if (!isEligible) {
//       toast.error(message); // ✅ Sonner error toast
//       return;
//     }

//     setBorrowing(true);

//     try {
//       const result = await borrowBook({ bookId, userId });

//       if (result.success) {
//         toast.success("Book borrowed successfully! 📚");
//         router.push("/my-profile");
//       } else {
//         toast.error(result.error);
//       }
//     } catch (error) {
//       toast.error("An error occurred while borrowing the book.");
//     } finally {
//       setBorrowing(false);
//     }
//   };

//   return (
//     <Button className="book-overview_btn" onClick={handleBorrowBook} disabled={borrowing}>
//       <Image src="/icons/book.svg" alt="book" width={20} height={20} />
//       <p className="font-bebas-neue text-xl text-dark-100">
//         {borrowing ? "Borrowing ..." : "Borrow Book"}
//       </p>
//     </Button>
//   );
// };

// export default BorrowBook;


"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; // ✅ Import Sonner
import { borrowBook } from "@/lib/actions/book";

interface Props {
  userId: string;
  bookId: string;
  borrowingEligibility?: {
    isEligible: boolean;
    message: string;
  };
}

const BorrowBook = ({ userId, bookId, borrowingEligibility }: Props) => {
  const router = useRouter();
  const [borrowing, setBorrowing] = useState(false);

  const isEligible = borrowingEligibility?.isEligible ?? false;
  const message = borrowingEligibility?.message ?? "Eligibility data unavailable.";

  const handleBorrowBook = async () => {
    if (!isEligible) {
      toast.error(message); // ❌ Sonner error toast
      return;
    }

    setBorrowing(true);

    try {
      const result = await borrowBook({ bookId, userId });

      if (result.success) {
        toast.success("📚 Success: Book borrowed successfully"); // ✅ Sonner success toast
        router.push("/my-profile");
      } else {
        toast.error(`❌ Error: ${result.error}`); // ❌ Sonner error toast
      }
    } catch (error) {
      toast.error("❌ Error: An error occurred while borrowing the book.");
    } finally {
      setBorrowing(false);
    }
  };

  return (
    <Button className="book-overview_btn" onClick={handleBorrowBook} disabled={borrowing}>
      <Image src="/icons/book.svg" alt="book" width={20} height={20} />
      <p className="font-bebas-neue text-xl text-dark-100">
        {borrowing ? "Borrowing ..." : "Borrow Book"}
      </p>
    </Button>
  );
};

export default BorrowBook;
