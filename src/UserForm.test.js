import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
    // render the component
    render(<UserForm/>)

    // manipulate the component or find an element in it
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button')

    // assertion - make sure the component is doing what we expect it to do
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument()

})

test("it calls onUserAdd when the form is submitted", async () => {
    const mock = jest.fn();
    //render the component
    render(<UserForm onUserAdd={mock}/>)

    // find two inputs
    const nameInput = screen.getByRole("textbox", {name: /name/i});
    const emailInput = screen.getByRole("textbox", {name: /email/i});

    //simulate typing a name
    await user.click(nameInput);

    await user.keyboard('jane');

    //simulate typing an email
    await user.click(emailInput);

    await user.keyboard('jane@jane.com');

    // find a button
    const button = screen.getByRole('button');

    // simulate click the button
    await user.click(button);

    // assertion to make sure "onUsedAdd" gets called with email/name
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name: "jane", email: "jane@jane.com"})
})

test('empties the two inputs when form is submitted', async () => {
    render(<UserForm onUserAdd={() => {
    }}/>)

    const nameInput = screen.getByRole('textbox', {name: /name/i});
    const emailInput = screen.getByRole('textbox', {name: /email/i});
    const button = screen.getByRole('button');

    await user.click(nameInput);
    await user.keyboard('jane');
    await user.click(emailInput);
    await user.keyboard('jane@jane.com');
    await user.click(button);

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
})