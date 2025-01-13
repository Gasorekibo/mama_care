import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllUserAction } from "../../redux/slices/userSlice";
import SelectInput from "../shared/SelectInput";

function AllUsers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserAction());
  }, []);
  const { users } = useSelector((state) => state?.users);

  const filterUserOptions = [
    { value: "admin", label: "Admin" },
    { value: "doctor", label: "Doctor" },
    { value: "nurse", label: "Nurse" },
    { value: "patient", label: "Patient" },
  ];

  return (
    <div className="overflow-x-auto">
      <SelectInput
        placeHolder="Filter user By role"
        options={filterUserOptions}
        haslabel={false}
      />
      <Table hoverable className="cursor-pointer leading-3">
        <TableHead>
          <TableHeadCell>Full Name</TableHeadCell>
          <TableHeadCell>Email</TableHeadCell>
          <TableHeadCell>Phone Number</TableHeadCell>
          <TableHeadCell>Role</TableHeadCell>
          <TableHeadCell>Address</TableHeadCell>
          <TableHeadCell>Region</TableHeadCell>
          <TableHeadCell>Province</TableHeadCell>
          <TableHeadCell>Latitude/Longitude</TableHeadCell>
          <TableHeadCell>Action</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {users?.map((user) => (
            <TableRow
              key={user?.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600 border-t"
            >
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {user.full_name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell className="text-red-900">
                {user.role.toLowerCase()}
              </TableCell>
              <TableCell>{user.location.address}</TableCell>
              <TableCell>{user.location.region}</TableCell>
              <TableCell>{user.location.province}</TableCell>
              <TableCell>{`${user.location.latitude}/ ${user.location.longitude}`}</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AllUsers;
