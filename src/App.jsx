import React, { useRef } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import emailjs from "@emailjs/browser";

export function App() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({
    from_name: "test",
    from_email: "test@gmail.com",
    message: "Hi am testing",
  });
  const ref = useRef();

  const handleOpen = () => setOpen(!open);

  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.from_email && data.from_name && data.message) {
      emailjs
        .sendForm("service_07ir2c8", "template_x5d8gxm", ref.current, {
          publicKey: "C-cxIYw7LRtlxc3bq",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    } else {
      return alert("Please fill properly");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Button onClick={handleOpen}>Send Message</Button>
      <Dialog open={open} size="sm" handler={handleOpen}>
        <form onSubmit={handleSubmit} ref={ref}>
          <div className="flex items-center justify-between">
            <DialogHeader className="flex flex-col items-start">
              {" "}
              <Typography className="mb-1" variant="h4">
                New message to @{" Shahbaz "}
              </Typography>
            </DialogHeader>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-3 h-5 w-5"
              onClick={handleOpen}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <DialogBody>
            <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
              Write your query and then click to send.
            </Typography>

            <div className="grid gap-6">
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Username
              </Typography>
              <Input
                label="Username"
                name="from_name"
                type="text"
                onChange={handleChange}
              />
              <Input
                label="Email"
                name="from_email"
                type="email"
                onChange={handleChange}
              />
              <Textarea
                label="Message"
                name="message"
                onChange={handleChange}
              />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="gray" onClick={handleOpen}>
              cancel
            </Button>
            <Button
              type="submit"
              variant="gradient"
              color="gray"
              onClick={handleOpen}
            >
              send message
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
}

export default App;
