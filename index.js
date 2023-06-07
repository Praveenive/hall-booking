const express = require("express");

const app = express();
app.use(express.json());

const hallData = [
    {
      id: "1",
      numberOfSeats: 100,
      amenities: ["Ac", "chairs", "discolights"],
      price: 5000,
      ifBooked: "true",
      customerName: "Sanjay",
      date: "10-June-2023",
      startTime: "10-June-2023 at 12PM",
      endTime: "11-June-2023 at 11am",
      RoomId: 201,
      RoomName: "Duplex",
    },
    {
      id: "2",
      numberOfSeats: 100,
      amenities: ["Ac", "chairs", "discolights"],
      price: 5000,
      ifBooked: "false",
      customerName: "",
      date: "",
      startTime: "",
      endTime: "",
      RoomId: 202,
      RoomName: "Duplex",
    },
    {
      id: "3",
      numberOfSeats: 50,
      amenities: ["Ac", "chairs"],
      price: 3000,
      ifBooked: "false",
      customerName: "",
      date: "",
      startTime: "",
      endTime: "",
      RoomId: 203,
      RoomName: "Classic",
    },
    {
      id: "4",
      numberOfSeats: 100,
      amenities: ["Ac", "chairs", "discolights"],
      price: 5000,
      ifBooked: "true",
      customerName: "Suresh",
      date: "15-June-2023",
      startTime: "15-June-2023 at 12PM",
      endTime: "16-June-2023 at 11am",
      RoomId: 204,
      RoomName: "Duplex",
    },
    {
      id: "5",
      numberOfSeats: 200,
      amenities: ["Ac", "chairs", "discolights", "buffet"],
      price: 9000,
      ifBooked: "true",
      customerName: "Vidhya",
      date: "11-June-2023",
      startTime: "11-June-2023 at 12PM",
      endTime: "12-June-2023 at 11am",
      RoomId: 205,
      RoomName: "Suite",
    },{
        id: "6",
        numberOfSeats: 100,
        amenities: ["Ac", "chairs", "discolights"],
        price: 7000,
        ifBooked: "true",
        customerName: "Sanjay",
        date: "17-June-2023",
        startTime: "17-June-2023 at 12PM",
        endTime: "18-June-2023 at 11am",
        RoomId: 241,
        RoomName: "Duplex",
      }
  ];

app.get("/",(req,res)=>{
      res.send("Welcome To Hall Booking")
})

// Q3)
app.get("/allrooms-data",(req,res)=>{
    res.status(200).json({data:hallData})
})

// Q4)
app.get("/booked-data",(req,res)=>{
    const {ifBooked} = req.query;
    let bookdHall ;    
    if(ifBooked){
        bookdHall = hallData.filter((hall)=>(hall.ifBooked===ifBooked))
        console.log(bookdHall)
       return  res.status(200).json({data:bookdHall})
    }
    res.status(400).json({data:"Room Not found"})
})


// Q5)

    app.post("/add-data",(req,res)=>{
        const newHall = {
            id:hallData.length+1,
            numberOfSeats:req.body.numberOfSeats,
            amenities:req.body.amenities,
            ifBooked :req.body. ifBooked,
            customerName:req.body.customerName,
            date:req.body.date,
            startTime:req.body.startTime,
            endTime:req.body.endTime,
            RoomId:req.body.RoomId,
            RoomName:req.body.RoomName
        }
        hallData.push(newHall);
        return res.status(200).json({data:newHall})
    })


    app.get("/booking-count",(req,res)=>{
        const {customerName}=req.query;
        let bookingCount;
        if(customerName){
         bookingCount = hallData.filter((hall)=>(hall.customerName===customerName))
         console.log(bookingCount)
         return res.status(200).json({data:bookingCount})
        }
    })


app.listen(9000,()=>console.log("Server started in Port :9000"))