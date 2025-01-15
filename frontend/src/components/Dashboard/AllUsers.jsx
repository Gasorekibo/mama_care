import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getAllUserAction } from "../../redux/slices/userSlice";
import SelectInput from "../shared/SelectInput";
import { filterUserOptions } from "../../lib/constant";

function AllUsers() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state?.users);

  const { control, watch } = useForm({
    defaultValues: {
      role: "",
    },
  });

  const selectedRole = watch("role");

  useEffect(() => {
    dispatch(getAllUserAction());
  }, [dispatch]);

  const filteredUsers = useMemo(() => {
    if (!selectedRole) return users;
    return users?.filter(
      (user) => user.role.toLowerCase() === selectedRole.toLowerCase()
    );
  }, [users, selectedRole]);

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-start my-1">
        <SelectInput
          placeholder="Filter user By role"
          options={filterUserOptions}
          name="role"
          control={control}
          className="w-64"
        />
      </div>
      <Table hoverable className="cursor-pointer leading-3">
        <TableHead>
          <TableHeadCell>
            N<sup>o</sup>
          </TableHeadCell>
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
          {filteredUsers?.length > 0 ? (
            filteredUsers?.map((user, index) => (
              <TableRow
                key={user?.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600 border-t"
              >
                <TableCell className="lg:border-r-2 ">{index + 1}</TableCell>
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
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={9} className="text-center py-4">
                No users found for the selected role
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default AllUsers;
