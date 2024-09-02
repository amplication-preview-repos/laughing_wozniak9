/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExpenseWhereUniqueInput } from "./ExpenseWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ExpenseUpdateInput } from "./ExpenseUpdateInput";

@ArgsType()
class UpdateExpenseArgs {
  @ApiProperty({
    required: true,
    type: () => ExpenseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExpenseWhereUniqueInput)
  @Field(() => ExpenseWhereUniqueInput, { nullable: false })
  where!: ExpenseWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ExpenseUpdateInput,
  })
  @ValidateNested()
  @Type(() => ExpenseUpdateInput)
  @Field(() => ExpenseUpdateInput, { nullable: false })
  data!: ExpenseUpdateInput;
}

export { UpdateExpenseArgs as UpdateExpenseArgs };
